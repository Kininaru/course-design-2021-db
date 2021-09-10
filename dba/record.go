package dba

type Record struct {
	Id        int64
	Timestamp int64
	Latency   int64
}

func AddRecord(timestamp, latency int64) bool {
	r := Record{Timestamp: timestamp, Latency: latency}

	lines, err := engine.Insert(&r)
	if err != err {
		panic(err)
	}

	return lines == 0
}

func GetRecords() []Record {
	var ret []Record

	if err := engine.Find(&ret); err != nil {
		panic(err)
	}

	return ret
}
