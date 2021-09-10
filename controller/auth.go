package controller

import (
	"net/http"
	"strings"

	"github.com/Kininaru/course-design-2021-db/config"
)

func PasswordIsWrong(w http.ResponseWriter, r *http.Request) bool {
	auth := r.Header.Get("Authorization")

	strs := strings.Split(auth, " ")

	if len(strs) != 2 || strs[0] != "password" || strs[1] != config.Password {
		response(w, 1)
		return true
	}

	return false
}
