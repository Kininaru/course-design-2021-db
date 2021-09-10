package service

import "time"

func Init() {
	go func() {
		for {
			time.Sleep(time.Hour)
			PingAndRecordAll()
		}
	}()
}
