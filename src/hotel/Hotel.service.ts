import { Observable } from "rxjs";

import { get } from "../http.service";
import Hotels from "./Hotels.domain";

export class HotelService {
    public getAllHotels(): Observable<Hotels> {
      return get('/hotels')
    }
}
