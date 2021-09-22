package controller

import (
	"net/http"

	"github.com/Kininaru/course-design-2021-db/dba"
)

func AddServer(w http.ResponseWriter, r *http.Request) {
	CorsFilter(w)
	var bodyBytes []byte
	r.Body.Read(bodyBytes)
	bodyStr := string(bodyBytes)
	dba.AddServer(bodyStr, bodyStr)

	response(w, 0)
}

func GetServers(w http.ResponseWriter, r *http.Request) {
	CorsFilter(w)

	response(w, 0, dba.GetServers())
}
