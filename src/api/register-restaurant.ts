import { api } from "@/lib/axios";

export interface RegisterRestaurantInBody {
    restaurantName: string,
    managerName: string,
    phone: string,
    email: string

}
export async function registerRestaurant({ 
    restaurantName,
    managerName,
    phone,
    email

}: RegisterRestaurantInBody) {
    await api.post('/restaurants', { 
        restaurantName,
        managerName,
        phone,
        email
    })
}
