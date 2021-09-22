package main

import (
	"net/http"

	"github.com/Kininaru/course-design-2021-db/controller"
	"github.com/Kininaru/course-design-2021-db/dba"
	"github.com/Kininaru/course-design-2021-db/service"
)

func main() {
	dba.Init()
	service.Init()
	controller.InitRouter()

	staticFiles := http.FileServer(http.Dir("./web/build/"))
	http.Handle("/", http.StripPrefix("/", staticFiles))

	if err := http.ListenAndServe(":23335", nil); err != nil {
		panic(err)
	}
}
