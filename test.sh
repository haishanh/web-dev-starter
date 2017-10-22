#!/bin/bash

NO_COLOR="\033[0m"
OK_COLOR="\033[32;01m"
NOK_COLOR="\033[31;01m"

error_exit() {
  echo -e "${NOK_COLOR}ERROR:  ${@}${NO_COLOR}"

  exit -1
}

ok() {
  echo -e " + ${@}...${OK_COLOR}OK${NO_COLOR}"
}

t() {
  if [ $? -eq 0 ];then
    ok "$1"
  else
    error_exit "$1"
  fi
}

banner() {
  echo -e "\n\n=== ${@}\n\n"
}

normal_prod() {
  cd examples/normal
  # install deps if not
  [ ! -d node_modules ] && yarn
  # build
  [ ! -f public/assets/app.bundle.js ] && yarn build

  cd public/assets
  #

  banner "testing"

  c=$(cat app.bundle.js | wc -c)
  [ $c -gt 20 -a $c -lt 500 ]
  t "app.bundle.js should contains less then 500 charaters"

  c=$(cat app.bundle.js | wc -l)
  [ $c -eq 0 ]
  t "app.bundle.js should contains only 1 row"

  c=$(cat vendor.bundle.js | wc -c)
  [ $c -gt 20 -a $c -lt 100000 ]
  t "vendor.bundle.js should contains less then 100,000 charaters"

  c=$(cat vendor.bundle.js | wc -l)
  [ $c -eq 0 ]
  t "vendor.bundle.js should contains only 1 row"

  # poor man's snapshot test
  cat style.css | grep "body{color:red}body{background:#ccc}body{color:blue}._2-VT-_VitVSzLtNzx2PlTz{color:red}" > /dev/null
  t "style.css should be generated correctly"

  # for easy debugging
  banner "all files in public/assets"
  ls -l

  banner "content of style.css"
  cat style.css
}

normal_prod
