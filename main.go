package main

import "net/http"

func main() {
	staticFiles := http.FileServer(http.Dir("./web/"))
	http.Handle("/", http.StripPrefix("/", staticFiles))

	if err := http.ListenAndServe(":23335", nil); err != nil {
		panic(err)
	}
}
