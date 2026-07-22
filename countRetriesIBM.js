function countRetrives(gap,reqid, timestamps){
    let freq = {};
    let count = 0;

    for(let i = 0;i<reqId.length;i++){
        let cur = reqId[i];
        let time  = timestamps[i]
        if(freq[cur] !== undefined){
            if(time - freq[cur] <= gap){
                count++;
            }
        }
        freq[cur] = time;
    }

return count;

}


// Example
let gap = 10;
let reqId = ["r1", "r1", "r1", "r2", "r2"];
let timestamps = [100, 105, 200, 300, 302];

console.log("countRetrive", countRetrives(gap, reqId, timestamps));


// dryRun

// | Request | Time | Last Time | Difference | Retry |
// | ------- | ---- | --------- | ---------- | ----- |
// | r1      | 100  | -         | -          | ❌     |
// | r1      | 105  | 100       | 5          | ✅ (1) |
// | r1      | 200  | 105       | 95         | ❌     |
// | r2      | 300  | -         | -          | ❌     |
// | r2      | 302  | 300       | 2          | ✅ (2) |
