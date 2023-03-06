#!/bin/env bash
gsutil -m rsync -x "\.DS_Store$|deploy\.sh$|LICENSE\.txt$|\.gitignore$|\.git\/" -d -r ./ gs://chase.sillevis.net