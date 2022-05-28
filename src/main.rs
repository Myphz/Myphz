#[macro_use] extern crate rocket;
use rocket::serde::{Deserialize, json::Json};

#[derive(Deserialize)]
#[serde(crate = "rocket::serde")]
struct Test {
    email: String,
    subject: String,
    message: String
}

#[post("/", data = "<data>")]
fn index(data: Json<Test>) -> &'static str {
    let Test { email, subject, message } = data.into_inner();
    println!("{} {} {}", email, subject, message);
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}