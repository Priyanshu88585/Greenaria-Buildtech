export async function fetchProperties() {
    try {
        const res = await fetch("/api/properties")
        const data = await res.json()
        return data.data
    } catch (error) {
        console.error("Failed to fetch properties", error)
        return []
    }
}