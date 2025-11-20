#!/bin/bash
namespace="db"
# Use -f TWICE to merge the base config and the secret config
helm upgrade postgresql -f values.base.yaml -f values.secrets.yaml -n ${namespace} .