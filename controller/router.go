package controller

import "net/http"

func InitRouter() {
	http.HandleFunc("/api/get-records", GetRecords)
	http.HandleFunc("/api/add-server", AddServer)
	http.HandleFunc("/api/get-servers", GetServers)
}
