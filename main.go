package main

import (
	"net/http"

	"github.com/Kininaru/course-design-2021-db/dba"
)

func main() {
	dba.Init()

	staticFiles := http.FileServer(http.Dir("./web/build/"))
	http.Handle("/", http.StripPrefix("/", staticFiles))

	if err := http.ListenAndServe(":23335", nil); err != nil {
		panic(err)
	}
}
