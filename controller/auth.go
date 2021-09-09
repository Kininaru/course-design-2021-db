package controller

import "net/http"

func GetToken(writer http.ResponseWriter, request *http.Request) {
	username := request.Header.Get("username")
	password := request.Header.Get("password")


}
