script_dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
root_dir="$script_dir/.."
mkdir -p $OUT
yarn ts-node "$root_dir/src/utils/tokens.ts"