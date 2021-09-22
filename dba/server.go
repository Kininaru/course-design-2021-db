package dba

type Server struct {
	Id   int
	Name string
	Host string
}

var servers []Server

func AddServer(name, host string) {
	server := Server{Name: name, Host: host, Id: len(servers)}
	servers = append(servers, server)
}

func GetServers() []Server {
	return servers
}
