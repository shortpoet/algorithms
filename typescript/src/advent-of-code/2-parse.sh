#!/bin/bash

set -e

# \: -> €€
# ([a-zA-Z]+) -> €"$0"€
# \s -> €, €
# ^ -> €[$0€
# $ -> €],€
# (\d+)\D+(\d+) -> €[$1, $2]€

# perl -i.bak -p -e "s/\\\$TOPIC?/$TOPIC $SUBTOPIC/g" "$0"