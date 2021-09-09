package controller

import "net/http"

func InitRouter() {
	http.HandleFunc("/api/get-token", GetToken)
}
