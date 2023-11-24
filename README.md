# WebXR Performance Benchmarking

Renders `n` unlit 24-vertex cubes with [`react-three-fiber`](https://docs.pmnd.rs/react-three-fiber) using a choice of 3 rendering methods:

- Naiive
- Merged meshes
- Instanced meshes

## Benchmarking Results

Benchmarks were conducted on the following hardware:

- Windows 11 Enterprise (21H2)
- 12th Gen Intel Core i9-12900KF 3.19GHz
- 32.0 GB RAM
- NVIDIA GeForce RTX 3080 Ti
- Valve Index HMD
- Google Chrome 119

![WebXR Benchmarks](./webxr-benchmarks.svg)

## Install

```bash
# Yarn
yarn install

# NPM
npm install
```

## Run Tests

Run on `localhost`:

```bash
# Yarn
yarn dev

# NPM
npm run dev
```

Run over https on the network. Replace `IP_ADDRESS` with the IP address of the host:

```bash
# Yarn
SERVE_HOST=IP_ADDRESS yarn dev

# NPM
SERVE_HOST=IP_ADDRESS npm run dev
```
