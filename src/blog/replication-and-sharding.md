March 31, 2026

# Replication and Sharding

## Replication

Replication is primarily used for fault tolerance and availability. If nodes don’t fail, replication never has any real performance benefit over a single nodes setup for strongly consistent reads and writes. You are essentially doing more work (consensus overhead) and repeated work (writes on multiple nodes and bounded by the slowest node). Most implementation of modern consensus protocols (multi-paxos, raft) have a lease-based leader node, which serializes read/writes anyway.

Some systems do allow for reading off of a follower that could potentially have stale data, but then we give up on strongly consistent reads.

## Sharding

If you want performance improvement, you need sharding. Now different server or server groups handle different data, so the workloads are distributed and can be handled in parallel. However, if a query touches multiple shards, you have the coordination overhead to ensure atomic transactions across multiple shards (two-phase commit). Sometime those overhead could be insignificant, other times they could introduce more latency and lower throughput (consider unoptimized, cross-shard joins)
