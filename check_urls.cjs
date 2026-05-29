const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1586942583569-b5fe1f7c706d?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1584982751601-97d883f510bd?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1579362148113-1768822000ea?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1579154204601-528b9d31f0f4?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1573883431205-98b5f10aaedb?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1583947581924-860bda6a4c28?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1574327311189-9831cb6b0394?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1584824558504-20b12976b92a?w=800&q=80&fit=crop",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8ed7c50800?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
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
