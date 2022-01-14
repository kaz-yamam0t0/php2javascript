# php2javascript
Javascript equivalent to PHP functions

## Usage

```javascript
// import functions
const { strtotime } = require("./function/strtotime");
const { date } = require("./function/date");

console.log(date('Y-m-d H:i:s', strtotime("1/14/2021 12:23:34"))); // 2021-01-14 12:23:34
console.log(date('Y-m-d H:i:s', strtotime("+1 month", new Date()))); // 2022-02-14 12:20:49
```

## Supported Functions

#### strings

* strlen
* substr
* strpos
* stripos
* str_contains
* strstr
* stristr
* str_starts_with
* str_ends_with
* strrchr
* strcmp
* strncmp
* strcasecmp
* strncasecmp
* str_repeat
* str_pad
* str_replace
* str_ireplace
* sprintf
* vsprintf
* addcslashes
* addslashes
* stripslashes
* stripcslashes
* chr
* ord
* trim
* ltrim
* rtrim
* strtolower
* strtoupper
* lcfirst
* ucfirst
* ucwords
* htmlspecialchars
* nl2br
* strip_tags
* count_chars
* bin2hex
* hex2bin
* number_format
* implode
* explode
* chop (the alias of "rtrim")
* strchr (the alias of "strstr")
* join (the alias of "implode")
* parse_str

#### filesystem

* basename
* dirname

#### array

* count
* in_array
* array_keys
* array_values
* array_key_exists
* array_shift
* array_pop
* array_unshift
* array_push
* array_slice
* array_splice
* array_chunk
* array_search
* array_map
* array_filter
* array_merge
* array_merge_recursive
* array_unique
* sort
* rsort
* shuffle
* usort
* range
* array_sum
* array_change_key_case
* natsort
* natcasesort
* sizeof (the alias of "count")

#### ctype

* ctype_alnum
* ctype_alpha
* ctype_lower
* ctype_upper
* ctype_digit
* ctype_xdigit
* ctype_space
* ctype_print
* ctype_punct
* ctype_cntrl
* ctype_graph

#### datetime

* date
* strtotime

#### url

* urlencode
* urldecode
* rawurlencode
* rawurldecode

## Standalone Functions

[php2js](https://web-ninja21.com/php2js/)
