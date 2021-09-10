package controller

import (
	"net/http"

	"github.com/Kininaru/course-design-2021-db/dba"
)

func GetRecords(w http.ResponseWriter, r *http.Request) {
	records := dba.GetRecords()

	response(w, 0, records)
}
