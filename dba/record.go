package dba

type Record struct {
	Id        int
	ServerId  int
	Timestamp int64
	Latency   int64
}

var records []Record

func AddRecord(r Record) {
	r.Id = len(records)
	records = append(records, r)
}

func GetRecords(id int) []Record {
	var ret []Record
	for _, record := range records {
		if record.ServerId == id {
			ret = append(ret, record)
		}
	}
	return ret
}
