use std::process::{Command, Output};
use specta_typescript::Typescript;
use tauri_specta::{collect_commands, Builder};

#[tauri::command]
#[specta::specta]
fn greet(name: &str) -> String {
    if name.is_empty() {
        return "Hi :) please enter your name!".to_string();
    }
    format!("Hello, {}!", name)
}

#[tauri::command]
#[specta::specta]
fn whoami() -> String {
    let output: Output = Command::new("whoami")
        .output()
        .expect("failed to execute process");

    let info: String = String::from_utf8(output.stdout).unwrap();
    let username: &str = info.split("\\").collect::<Vec<&str>>()[1];
    return String::from(username);
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let builder = Builder::<tauri::Wry>::new()
        // Then register them (separated by a comma)
        .commands(collect_commands![greet, whoami]);

    #[cfg(debug_assertions)] // <- Only export on non-release builds
    builder
        .export(Typescript::default(), "../src/bindings.ts")
        .expect("Failed to export typescript bindings");

    // tauri::Builder::default()
    //     .setup(|app| {
    //         if cfg!(debug_assertions) {
    //             app.handle().plugin(
    //                 tauri_plugin_log::Builder::default()
    //                     .level(log::LevelFilter::Info)
    //                     .build(),
    //             )?;
    //         }
    //         Ok(())
    //     })
    //     .invoke_handler(tauri::generate_handler![greet])
    //     .run(tauri::generate_context!())
    //     .expect("error while running tauri applicationcom.tauri.dev");
    tauri::Builder::default()
        // and finally tell Tauri how to invoke them
        .invoke_handler(builder.invoke_handler())
        .setup(move |app| {
            // This is also required if you want to use events
            builder.mount_events(app);

            Ok(())
        })
        // on an actual app, remove the string argument
        .run(tauri::generate_context!("tauri.conf.json"))
        .expect("error while running tauri application");
}
