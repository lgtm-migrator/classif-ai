const incidents = "All incidents";
const prevLabel = "person";
const prevTime = new Date().toLocaleString('en-US');

onmessage = (event) => {
    logger(event,incidents,prevLabel,prevTime)
}
