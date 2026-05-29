const urls = [
  "https://images.unsplash.com/photo-1584820927508-cadefc136fcc?w=800&q=80&fit=crop", // masks
  "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=800&q=80&fit=crop", // ppe
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80&fit=crop", // hospital
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&fit=crop", // thermometer / test
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&fit=crop", // stethoscope
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80&fit=crop", // logistics
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&fit=crop"  // medical
];

async function checkUrls() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) {
        console.log(`Broken: ${url} (Status: ${res.status})`);
      } else {
        console.log(`OK: ${url}`);
      }
    } catch (e) {
      console.log(`Failed: ${url} (${e.message})`);
    }
  }
}

checkUrls();
