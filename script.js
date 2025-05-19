const cards = {
  dreams: [
    "لو فزت بمليون جنيه، هتعمل إيه أول حاجة؟",
    "نفسك تعيش فين غير بلدك؟"
  ],
  situations: [
    "احكي عن موقف محرج حصلك ومش قادر تنساه.",
    "إيه آخر مرة ضحكت فيها من قلبك؟"
  ],
  relationships: [
    "بتحب تعرّف الناس على نفسك إزاي؟",
    "أول انطباع بتحاول تسيبه عند الناس إيه؟"
  ],
  entertainment: [
    "إيه أكتر فيلم شوفته أكتر من مرة ومزهقتش؟",
    "مسلسل تابعته للنهاية وندمت؟"
  ],
  personal: [
    "إيه أكتر حاجة بتخاف منها بس مش بتقول لحد؟",
    "بتحب تبدأ يومك بإيه؟"
  ],
  imagination: [
    "لو عندك آلة زمن، هتروح فين؟",
    "لو تقدر تكون أي شخصية خيالية، مين تختار؟",
    "لو صحيت تاني يوم ولقيت نفسك في عالم تاني، هيكون عامل إزاي؟",
    "لو تقدر تختفي ساعة في اليوم، هتعمل إيه؟"
  ],
  values: [
    "إيه أهم مبدأ في حياتك؟",
    "هل تؤمن إن الخير بيرجع؟",
    "لو اضطريت تختار بين الصدق والراحة، تختار إيه؟",
    "هل تقدر تسامح حد خانك؟"
  ]
};

function drawCard() {
  const category = document.getElementById("category").value;
  const cardDiv = document.getElementById("card");
  const cardSound = document.getElementById("cardSound");
  const selectedCards = cards[category];

  if (!selectedCards || selectedCards.length === 0) {
    cardDiv.textContent = "لا يوجد كروت في هذه الفئة حاليًا.";
    return;
  }

  const randomCard = selectedCards[Math.floor(Math.random() * selectedCards.length)];

  // Play sound
  cardSound.play();

  // Add fade effect
  cardDiv.classList.add("fade");
  setTimeout(() => {
    cardDiv.textContent = randomCard;
    cardDiv.classList.remove("fade");
  }, 300);
}
