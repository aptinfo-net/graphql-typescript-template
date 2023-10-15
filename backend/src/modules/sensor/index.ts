const PING = 'PING'

async function sensors() {
    return [
        {
	    type: PING,
            host: 'example.com'
        }
    ]
}

export const queries = {
    sensors,
}

