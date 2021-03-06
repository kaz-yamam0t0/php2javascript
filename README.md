# php2javascript
Javascript equivalent to PHP functions

## Installation

```shell
$ npm i -g npm
$ npm i --save php2javascript
```

## Usage

```javascript
// import functions
const { strtotime, date } = require("php2javascript");

// each function can be imported like this:
// const { strtotime } = require("php2javascript/function/strtotime");
// const { date } = require("php2javascript/function/date");

console.log(date('Y-m-d H:i:s', strtotime("1/14/2021 12:23:34"))); // 2021-01-14 12:23:34
console.log(date('Y-m-d H:i:s', strtotime("+1 month", new Date()))); // 2022-02-14 12:20:49
```

## Supported Functions

#### strings

* addcslashes
* addslashes
* bin2hex
* chop (the alias of "rtrim")
* chr
* chunk_split
* count_chars
* explode
* get_html_translation_table
* hex2bin
* html_entity_decode
* htmlentities
* htmlspecialchars
* htmlspecialchars_decode
* implode
* join (the alias of "implode")
* lcfirst
* ltrim
* md5
* nl2br
* number_format
* ord
* parse_str
* rtrim
* sprintf
* str_contains
* str_ends_with
* str_ireplace
* str_pad
* str_repeat
* str_replace
* str_starts_with
* strcasecmp
* strchr (the alias of "strstr")
* strcmp
* strip_tags
* stripcslashes
* stripos
* stripslashes
* stristr
* strlen
* strncasecmp
* strncmp
* strpos
* strrchr
* strstr
* strtolower
* strtoupper
* substr
* trim
* ucfirst
* ucwords
* vsprintf
* wordwrap

#### filesystem

* basename
* dirname

#### array

* array_change_key_case
* array_chunk
* array_filter
* array_key_exists
* array_keys
* array_map
* array_merge
* array_merge_recursive
* array_pop
* array_push
* array_search
* array_shift
* array_slice
* array_splice
* array_sum
* array_unique
* array_unshift
* array_values
* count
* in_array
* natcasesort
* natsort
* range
* rsort
* shuffle
* sizeof (the alias of "count")
* sort
* usort

#### ctype

* ctype_alnum
* ctype_alpha
* ctype_cntrl
* ctype_digit
* ctype_graph
* ctype_lower
* ctype_print
* ctype_punct
* ctype_space
* ctype_upper
* ctype_xdigit

#### datetime

* checkdate
* date
* date_add
* date_create
* date_create_from_format
* date_date_set
* date_diff
* date_format
* date_isodate_set
* date_modify
* date_parse
* date_parse_from_format
* date_sub
* getdate
* idate
* localtime
* microtime
* mktime
* strtotime
* time

#### url

* base64_decode
* base64_encode
* http_build_query
* parse_url
* rawurldecode
* rawurlencode
* urldecode
* urlencode

## Functions

https://web-ninja21.com/php2js/

## NPM

https://www.npmjs.com/package/php2javascript

## Github

https://github.com/kaz-yamam0t0/php2javascript
