import axios from "axios";
//const exercise_url = "http://localhost:5001/api/exercises";
const workout_url = "http://localhost:5001/api/workouts";

export default class API {
  //add record
  static async addWorkout(workout) {
    const res = await axios.post(workout_url, workout);
    return res.data;
  }


}