package dba

type Server struct {
	Id   int64
	Name string
	Host string
}

func AddServer(name, host string) bool {
	var err error
	var lines int64

	server := Server{Name: name, Host: host}
	if lines, err = engine.Insert(&server); err != nil {
		panic(err)
	}

	return lines == 0
}

func GetServers() []Server {
	var ret []Server

	if err := engine.Find(&ret); err != nil {
		panic(err)
	}

	return ret
}
