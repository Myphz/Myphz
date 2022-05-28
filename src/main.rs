#[macro_use] extern crate rocket;
use rocket::serde::{json::Json, Deserialize, Serialize};
use rocket::http::Status;
use rocket::response::status;
use validator::Validate;

#[derive(Deserialize, Validate)]
struct Params {
    #[validate(email)]
    email: String,
    subject: String,
    message: String
}

#[derive(Serialize)]
struct Response {
    success: bool,
    message: String
}

#[post("/", format = "json", data = "<data>")]
fn index(data: Json<Params>) -> status::Custom<Json<Response>> {
    let fields = data.into_inner();
    let is_valid = fields.validate();
    if is_valid.is_err() {
        return status::Custom(Status::BadRequest, Json(Response { success: false, message: String::from("Invalid")}));
    }
    let Params { email, subject, message } = fields;
    println!("{:?}, {} {} {}", is_valid, email, subject, message);
    return status::Custom(Status::Ok, Json(Response { success: true, message: String::from("Invalid")}));
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}