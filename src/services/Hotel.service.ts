import {get} from './Http.service';
import { Observable } from "rxjs";
import {Hotels} from "./json/hotel.json";

export class HotelService {
  public getAllHotels(): Observable<Hotels> {
    return get('/hotels')
  }
}
