package controller

import (
	"net/http"
	"strconv"
	"strings"

	"github.com/Kininaru/course-design-2021-db/dba"
)

func GetRecords(w http.ResponseWriter, r *http.Request) {
	CorsFilter(w)

	id, _ := strconv.Atoi(strings.Split(r.URL.Path, "=")[0])
	records := dba.GetRecords(id)

	response(w, 0, records)
}
