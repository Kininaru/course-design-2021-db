package service

import (
	"fmt"
	"net"
	"time"

	"github.com/Kininaru/course-design-2021-db/dba"
	"github.com/tatsushid/go-fastping"
)

func PingAndRecordAll() {
	servers := dba.GetServers()
	for _, server := range servers {
		time.Sleep(10 * time.Second)
		PingAndRecord(server)
	}
}

func PingAndRecord(server dba.Server) {
	p := fastping.NewPinger()
	ra, err := net.ResolveIPAddr("ip4:icmp", server.Host)
	if err != nil {
		panic(err)
	}
	p.AddIPAddr(ra)
	p.OnRecv = func(addr *net.IPAddr, rtt time.Duration) {
		fmt.Println(rtt)
		dba.AddRecord(dba.Record{
			ServerId:  server.Id,
			Timestamp: time.Now().Unix(),
			Latency:   rtt.Nanoseconds(),
		})
	}
	err = p.Run()
	if err != nil {
		panic(err)
	}
}
