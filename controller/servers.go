package controller

import (
	"net/http"

	"github.com/Kininaru/course-design-2021-db/dba"
)

func AddServer(w http.ResponseWriter, r *http.Request) {
	if PasswordIsWrong(w, r) {
		return
	}

	serverName := r.Form.Get("ServerName")
	serverHost := r.Form.Get("ServerHost")
	if !dba.AddServer(serverName, serverHost) {
		Response(w, 2)
	}

	Response(w, 0)
}
