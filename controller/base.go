package controller

import (
	"encoding/json"
	"net/http"

	"github.com/Kininaru/course-design-2021-db/dba"
)

type Result struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}

func response(w http.ResponseWriter, code int, data ...interface{}) {
	r := Result{Code: code}

	if len(data) != 0 {
		r.Data = data[0]
	}

	statusCode := 200
	switch code {
	case 1:
		r.Msg = "unauthorized operation"
		statusCode = 403
	case dba.DatabaseError:
		r.Msg = "database error"
		statusCode = 502
	}

	w.WriteHeader(statusCode)
	resultBytes, _ := json.Marshal(r)

	if _, err := w.Write(resultBytes); err != nil {
		panic(err)
	}
}
