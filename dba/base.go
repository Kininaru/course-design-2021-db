package dba

import (
	_ "github.com/go-sql-driver/mysql"
	"xorm.io/xorm"
)

var engine *xorm.Engine

func Init() {
	var err error
	engine, err = xorm.NewEngine("mysql", "root:123/server_manager")
	if err != nil {
		panic(err)
	}
}
