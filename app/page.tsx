import Image from "next/image";
import { FaRegClock, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-barber.jpg" 
            alt="Barbier stylé en train de couper les cheveux" 
            fill 
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">ÉLÉGANCE & PRÉCISION</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">Votre expérience coiffure premium dans un cadre raffiné</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            PRENDRE RENDEZ-VOUS
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NOS SERVICES</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <FaScissors className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Coupe Classique</h3>
              <p className="text-gray-600 text-center mb-4">Une coupe traditionnelle pour un look élégant et intemporel.</p>
              <p className="text-amber-600 font-bold text-center">25€</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <FaScissors className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Coupe & Barbe</h3>
              <p className="text-gray-600 text-center mb-4">Taille de barbe experte et coupe de cheveux précise.</p>
              <p className="text-amber-600 font-bold text-center">40€</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <FaScissors className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Rasage Royal</h3>
              <p className="text-gray-600 text-center mb-4">Rasage traditionnel à l'ancienne avec serviette chaude.</p>
              <p className="text-amber-600 font-bold text-center">35€</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300">
              VOIR TOUS LES SERVICES
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg">
                <Image 
                  src="/barber-shop.jpg" 
                  alt="Notre salon de coiffure" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">À PROPOS DE NOUS</h2>
              <div className="w-24 h-1 bg-amber-600 mb-6"></div>
              <p className="text-gray-600 mb-6">Depuis 2010, notre salon s'est engagé à fournir des services de coiffure exceptionnels dans une atmosphère raffinée et chaleureuse. Notre équipe de barbiers experts est passionnée par son métier et utilise des techniques traditionnelles combinées aux tendances modernes.</p>
              <p className="text-gray-600 mb-8">Nous utilisons exclusivement des produits de haute qualité pour garantir les meilleurs résultats pour vos cheveux et votre barbe. Chez nous, chaque client reçoit une attention personnalisée et un service sur mesure.</p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CE QUE DISENT NOS CLIENTS</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Image 
                  src="/avatar-1.jpg" 
                  alt="Client" 
                  width={60} 
                  height={60} 
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Thomas Dubois</h3>
                  <div className="flex text-amber-500">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-300">"Service impeccable et résultat parfait. Mon barbier a pris le temps de comprendre exactement ce que je voulais. Je recommande à 100% !"</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Image 
                  src="/avatar-2.jpg" 
                  alt="Client" 
                  width={60} 
                  height={60} 
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Lucas Martin</h3>
                  <div className="flex text-amber-500">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-300">"Ambiance luxueuse, service personnalisé et coupe parfaite. Ce salon a dépassé toutes mes attentes. J'y retourne dès que possible."</p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Image 
                  src="/avatar-3.jpg" 
                  alt="Client" 
                  width={60} 
                  height={60} 
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Antoine Bernard</h3>
                  <div className="flex text-amber-500">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-300">"Première visite aujourd'hui et certainement pas la dernière. Le rasage à l'ancienne est une expérience à vivre absolument. Merci à toute l'équipe !"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <FaRegClock className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Horaires d'ouverture</h3>
              <p className="text-gray-600">Lundi - Vendredi: 9h - 20h</p>
              <p className="text-gray-600">Samedi: 9h - 18h</p>
              <p className="text-gray-600">Dimanche: Fermé</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Réservations</h3>
              <p className="text-gray-600 mb-4">Réservez votre rendez-vous par téléphone ou en ligne</p>
              <p className="text-amber-600 font-bold">+33 1 23 45 67 89</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Notre adresse</h3>
              <p className="text-gray-600">123 Avenue des Champs-Élysées</p>
              <p className="text-gray-600">75008 Paris, France</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NOTRE INSTAGRAM</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Suivez-nous sur les réseaux sociaux pour découvrir nos dernières créations et actualités</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative aspect-square overflow-hidden rounded-lg group">
                <Image 
                  src={`/insta-${item}.jpg`} 
                  alt="Instagram photo" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-3xl" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition duration-300">
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
