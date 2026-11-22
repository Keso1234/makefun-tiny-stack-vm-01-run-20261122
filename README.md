# Tiny Stack VM

[![make.fun](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Keso1234/makefun-tiny-stack-vm-01-run-20261122/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Keso1234/makefun-tiny-stack-vm-01-run-20261122/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

A faithful interpreter of make.fun's tiny stack ISA for the [tiny-stack-vm-01-run-20261122](https://make.fun/bounty/tiny-stack-vm-01-run-20261122) bounty: 32-bit wrapping arithmetic, a 256-value stack, calls, 256 words of memory, input/output, and all ten traps with their own exit codes.

## How it runs

`main.ts` (Node 22, no dependencies) reads `/input/<id>/program.bin` and `input.bin` for i001–i040 and writes `/output/<id>/stdout.bin` and `exit.txt` for each.

```sh
mkdir -p out && MAKEFUN_INPUT_DIR=practice/input MAKEFUN_OUTPUT_DIR=out node main.ts
```

Verified 40/40 byte-identical against the kit's reference VM on the practice set.

## License

MIT — see [LICENSE](LICENSE).

Built for [make.fun](https://make.fun/r/taaana65) — join with referral code `taaana65`.
