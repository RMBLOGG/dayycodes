import os
from flask import Flask, render_template, request, redirect, url_for, flash
from whitenoise import WhiteNoise

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'portfolio-ramdan-secret-2024')

# WhiteNoise — serve static files di production (Vercel)
app.wsgi_app = WhiteNoise(
    app.wsgi_app,
    root=os.path.join(os.path.dirname(__file__), 'static'),
    prefix='static'
)

# ─── Data Proyek ─────────────────────────────────────────────────────────────
projects = [
    {
        "id": 1,
        "title": "Animeku.ID",
        "url": "https://animeku-id.vercel.app",
        "screenshot": "https://api.microlink.io/?url=https://animeku-id.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        "description": "Platform nonton anime subtitle Indonesia dengan koleksi lengkap dan tampilan bersih.",
        "tags": ["Flask", "Python", "Anime API", "Vercel"],
        "badge": "Streaming",
        "accent": "#a78bfa",
        "category": "streaming"
    },
    {
        "id": 2,
        "title": "Dayynime",
        "url": "https://dayynime.vercel.app",
        "screenshot": "https://api.microlink.io/?url=https://dayynime.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        "description": "Streaming anime sub Indo dengan fitur live viewer, chat realtime, dan sistem premium voucher.",
        "tags": ["Flask", "Supabase", "Realtime", "Vercel"],
        "badge": "Streaming",
        "accent": "#ff6b9d",
        "category": "streaming"
    },
    {
        "id": 3,
        "title": "Cinevu",
        "url": "https://cinevu.vercel.app",
        "screenshot": "https://api.microlink.io/?url=https://cinevu.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        "description": "Situs nonton film dan series subtitle Indonesia dengan UI modern ala platform streaming profesional.",
        "tags": ["Flask", "Python", "Movie API", "Vercel"],
        "badge": "Film",
        "accent": "#fb923c",
        "category": "streaming"
    },
    {
        "id": 4,
        "title": "MyListAnime",
        "url": "https://mylistanime-v2.vercel.app",
        "screenshot": "https://api.microlink.io/?url=https://mylistanime-v2.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        "description": "App untuk menyimpan 9 anime paling berkesan versi pengguna, dengan tampilan grid yang estetik.",
        "tags": ["Flask", "Supabase", "Vercel"],
        "badge": "MyList",
        "accent": "#f472b6",
        "category": "web"
    },
    {
        "id": 5,
        "title": "Dayy's Web",
        "url": "https://dayy-s-web.vercel.app",
        "screenshot": "https://api.microlink.io/?url=https://dayy-s-web.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        "description": "Situs download game PC classic lawas yang susah dicari, dikurasi dengan rapi.",
        "tags": ["Flask", "Python", "Vercel"],
        "badge": "Game",
        "accent": "#facc15",
        "category": "web"
    },
    {
        "id": 6,
        "title": "DayyScorer",
        "url": "https://dayyscorer.vercel.app",
        "screenshot": "https://api.microlink.io/?url=https://dayyscorer.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        "description": "Live score sepak bola realtime plus fitur nonton streaming pertandingan langsung.",
        "tags": ["Flask", "Live API", "Streaming", "Vercel"],
        "badge": "Sports",
        "accent": "#4ade80",
        "category": "streaming"
    },
    {
        "id": 7,
        "title": "Dayynime API",
        "url": "https://dayynime-api.vercel.app",
        "screenshot": "https://api.microlink.io/?url=https://dayynime-api.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        "description": "Public REST API untuk data anime — endpoint lengkap: info, episode, streaming URL, search, dan trending.",
        "tags": ["REST API", "Python", "JSON", "Vercel"],
        "badge": "API",
        "accent": "#06b6d4",
        "category": "api"
    },
    {
        "id": 8,
        "title": "Cinevu API",
        "url": "https://cinevu-api.vercel.app",
        "screenshot": "https://api.microlink.io/?url=https://cinevu-api.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
        "description": "Public REST API untuk data film & series — info detail, link streaming, search judul, dan data genre.",
        "tags": ["REST API", "Python", "JSON", "Vercel"],
        "badge": "API",
        "accent": "#f97316",
        "category": "api"
    }
]

# ─── Routes ───────────────────────────────────────────────────────────────────

@app.route('/')
def index():
    """Halaman utama — kirim data projects ke template"""
    return render_template('index.html', projects=projects)


@app.route('/contact', methods=['POST'])
def contact():
    """Terima form kontak, flash pesan sukses/gagal, redirect kembali ke #contact"""
    nama  = request.form.get('nama',  '').strip()
    email = request.form.get('email', '').strip()
    pesan = request.form.get('pesan', '').strip()

    if nama and email and pesan:
        flash('success:Pesan berhasil dikirim! Terima kasih, akan segera dibalas.')
    else:
        flash('error:Harap isi semua field dengan benar.')

    return redirect(url_for('index') + '#contact')


if __name__ == '__main__':
    app.run(debug=False)
