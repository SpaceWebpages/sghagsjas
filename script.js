const phrases = {
  popular: ["Good Morning", "Nice to Meet you", "Thank you", "How are You?", "Goodbye"],
  basics: ["Yes", "No", "Please", "Excuse me", "I'm sorry"],
  social: ["What is your name?", "Where are you from?", "I like this", "That's great", "Let's go"],
  travel: ["Where is the hotel?", "How much is the fare?", "I need help", "I’m lost", "Take me there"],
  dates: ["What time is it?", "What day is today?", "January", "One", "Ten"],
  emergency: ["Call the police", "I need a doctor", "Help!", "There is a fire", "I'm in danger"]
};

const translations = {
  fil: {
    popular: ["Magandang Umaga", "Ikinagagalak kitang makilala", "Salamat", "Kamusta ka?", "Paalam"],
    basics: ["Oo", "Hindi", "Pakiusap", "Paumanhin", "Pasensya na"],
    social: ["Ano ang pangalan mo?", "Tagasaan ka?", "Gusto ko ito", "Ayos 'yan", "Tara na"],
    travel: ["Nasaan ang hotel?", "Magkano ang pamasahe?", "Kailangan ko ng tulong", "Naliligaw ako", "Dalhin mo ako doon"],
    dates: ["Anong oras na?", "Anong araw ngayon?", "Enero", "Isa", "Sampu"],
    emergency: ["Tumawag ng pulis", "Kailangan ko ng doktor", "Tulong!", "May sunog", "Nasa panganib ako"]
  },
  kap: {
    popular: ["Mayap a abak", "Agagalak dakang akilala", "Salamat", "Komusta naka?", "Pámanuli"],
    basics: ["O", "Ali", "Paki", "Dispensiya", "Patawad"],
    social: ["Nanu ya ing lagyu mu?", "Taga-ninu ka?", "Buri keini", "Ayos la reng ita", "Tara na"],
    travel: ["Nu ya ing hotel?", "Magkanu ya pamasahe?", "Kailangan ku yang saup", "Makasasala ku", "I-dala me ku karin"],
    dates: ["Nanung oras na?", "Anung aldo ngeni?", "Enero", "Metung", "Sampulu"],
    emergency: ["I-tawag ye ing pulis", "Kailangan ku ing doktor", "Saup!", "Atiu yang kasunugan", "Atyu ku king kapahamakan"]
  },
  ilo: {
    popular: ["Naimbag a bigat", "Naragsakak nga makikadua kenka", "Agyamanak", "Kumusta ka?", "Agpakadaakon"],
    basics: ["Wen", "Saan", "Pagpakawan", "Ekskyus me", "Pakawanak"],
    social: ["Ania ti nagan mo?", "Tagaanoka?", "Kayat ko daytoy", "Naimbag dayta", "Umay tayon"],
    travel: ["Ayanna ti hotel?", "Mano ti plete?", "Masapul ko ti tulong", "Nalipatak", "Idaawak man ditoy"],
    dates: ["Ania ti oras?", "Ania nga aldaw itan?", "Enero", "Maysa", "Sangapulo"],
    emergency: ["Iawag ti pulis", "Masapul ko ti doktor", "Tulong!", "Adda uram", "Adda ak iti peligro"]
  }
};

  let currentCategory = "popular"; // default category

  function updateWords() {
    const selectedLang = document.getElementById("sel").value;
    const englishWords = phrases[currentCategory];
    const translatedWords = translations[selectedLang]?.[currentCategory] || [];

    for (let i = 0; i < 5; i++) {
      document.getElementById("phrase" + (i + 1)).textContent = englishWords[i] || "";
      document.getElementById("trans" + (i + 1)).textContent = translatedWords[i] || "";
    }
  }

  // Dropdown change event
  document.getElementById("sel").addEventListener("change", updateWords);

  // Category click events
  document.getElementById("cat-popular").addEventListener("click", () => {
    currentCategory = "popular";
    updateWords();

    document.getElementById('cat-popular').style.backgroundColor = '#007BFF';
    document.getElementById('cat-popular').style.color = '#fff';

    document.getElementById('cat-basics').style.backgroundColor = '#fff';
    document.getElementById('cat-basics').style.color = '#1e1e1e';

    document.getElementById('cat-social').style.backgroundColor = '#fff';
    document.getElementById('cat-social').style.color = '#1e1e1e';

    document.getElementById('cat-travel').style.backgroundColor = '#fff';
    document.getElementById('cat-travel').style.color = '#1e1e1e';

    document.getElementById('cat-emergency').style.backgroundColor = '#fff';
    document.getElementById('cat-emergency').style.color = '#1e1e1e';
  });

  document.getElementById("cat-basics").addEventListener("click", () => {
    currentCategory = "basics";
    updateWords();

    document.getElementById('cat-basics').style.backgroundColor = '#007BFF';
    document.getElementById('cat-basics').style.color = '#fff';

    document.getElementById('cat-popular').style.backgroundColor = '#fff';
    document.getElementById('cat-popular').style.color = '#1e1e1e';

    document.getElementById('cat-social').style.backgroundColor = '#fff';
    document.getElementById('cat-social').style.color = '#1e1e1e';

    document.getElementById('cat-travel').style.backgroundColor = '#fff';
    document.getElementById('cat-travel').style.color = '#1e1e1e';

    document.getElementById('cat-emergency').style.backgroundColor = '#fff';
    document.getElementById('cat-emergency').style.color = '#1e1e1e';
  });

  document.getElementById("cat-social").addEventListener("click", () => {
    currentCategory = "social";
    updateWords();

    document.getElementById('cat-social').style.backgroundColor = '#007BFF';
    document.getElementById('cat-social').style.color = '#fff';

    document.getElementById('cat-popular').style.backgroundColor = '#fff';
    document.getElementById('cat-popular').style.color = '#1e1e1e';

    document.getElementById('cat-basics').style.backgroundColor = '#fff';
    document.getElementById('cat-basics').style.color = '#1e1e1e';

    document.getElementById('cat-travel').style.backgroundColor = '#fff';
    document.getElementById('cat-travel').style.color = '#1e1e1e';

    document.getElementById('cat-emergency').style.backgroundColor = '#fff';
    document.getElementById('cat-emergency').style.color = '#1e1e1e';
  });

  document.getElementById("cat-travel").addEventListener("click", () => {
    currentCategory = "travel";
    updateWords();

    document.getElementById('cat-travel').style.backgroundColor = '#007BFF';
    document.getElementById('cat-travel').style.color = '#fff';

    document.getElementById('cat-popular').style.backgroundColor = '#fff';
    document.getElementById('cat-popular').style.color = '#1e1e1e';

    document.getElementById('cat-basics').style.backgroundColor = '#fff';
    document.getElementById('cat-basics').style.color = '#1e1e1e';

    document.getElementById('cat-social').style.backgroundColor = '#fff';
    document.getElementById('cat-social').style.color = '#1e1e1e';

    document.getElementById('cat-emergency').style.backgroundColor = '#fff';
    document.getElementById('cat-emergency').style.color = '#1e1e1e';
  });
  
  document.getElementById("cat-emergency").addEventListener("click", () => {
    currentCategory = "emergency";
    updateWords();

    document.getElementById('cat-emergency').style.backgroundColor = '#007BFF';
    document.getElementById('cat-emergency').style.color = '#fff';

    document.getElementById('cat-popular').style.backgroundColor = '#fff';
    document.getElementById('cat-popular').style.color = '#1e1e1e';

    document.getElementById('cat-basics').style.backgroundColor = '#fff';
    document.getElementById('cat-basics').style.color = '#1e1e1e';

    document.getElementById('cat-social').style.backgroundColor = '#fff';
    document.getElementById('cat-social').style.color = '#1e1e1e';4

    document.getElementById('cat-travel').style.backgroundColor = '#fff';
    document.getElementById('cat-travel').style.color = '#1e1e1e';
  });

  // Initial load
  updateWords();

function speech(){
    // SPEECH TO TEXT
const micIcon = document.getElementById('mic');

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.lang = 'en-US'; // Default, can be changed dynamically
    recognition.interimResults = false;

    micIcon.addEventListener('click', () => {
        recognition.start();
    });

    recognition.onstart = () => {
        console.log('Voice recognition started...');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('txt1').value = transcript;
        console.log('Transcript:', transcript);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
        console.log('Voice recognition ended.');
    };
    } else {
        alert('Speech recognition not supported in this browser.');
    }
}
