import * as axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "336e5163-4305-4527-b245-59ad1b7b0990"
    }
})

export const profileAPI = {
    setProfile(userID = 2) {
        return instance.get(`profile/${userID}`)
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`).then(response => response.data.resultCode)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data.resultCode)
    }
}

export const authAPI = {
    getAuthAPI() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}