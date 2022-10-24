let chestExercises = [
    {name: "Bench press", 
    muscles: "pectoralis major, deltoids, triceps",
    image: "https://thumbs.gfycat.com/AngelicWhirlwindKronosaurus.webp"
    },
    {name: "Dumbbell bench press",
    muscles: "pectoralis major, deltoids, triceps",
    image: "https://thumbs.gfycat.com/DiscreteDismalApisdorsatalaboriosa.webp"
    },
    {name: "Machine bench press",
    muscles: "pectoralis major, deltoids, triceps",
    image: "https://thumbs.gfycat.com/LonelyVibrantKitfox-max-1mb.gif"
    },
    {name: "Incline dumbbell press",
    muscles: "pectoralis major, deltoids, triceps",
    image: "https://thumbs.gfycat.com/AmpleCooperativeIndigobunting.webp"
    },
    {name: "Incline barbell press",
    muscles: "pectoralis major, deltoids, triceps",
    image: "https://thumbs.gfycat.com/ExemplaryDelectableDassierat.webp"
    },
    {name: "Decline barbell press",
    muscles: "pectoralis major, deltoids, triceps",
    image: "https://thumbs.gfycat.com/DeepHeavyHuemul.webp"
    },
    {name: "Push-ups",
    muscles: "pectoralis major, deltoids, triceps",
    image: "https://thumbs.gfycat.com/BriefMadeupAmericanwigeon-max-1mb.gif"
    },
    {name: "Cable chest fly",
    muscles: "pectoralis major",
    image: "https://thumbs.gfycat.com/BadShabbyHoneycreeper.webp"
    },
    {name: "Dumbbell fly",
    muscles: "pectoralis major",
    image: "https://thumbs.gfycat.com/HarmoniousRichHorse.webp"
    },
]

let shoulderExercises = [
    {name: "Dumbbell shoulder press",
    muscles: "anterior deltoid and triceps",
    image: "https://thumbs.gfycat.com/FeminineNecessaryAtlanticsharpnosepuffer.webp"
    },
    {name: "Barbell shoulder press",
    muscles: "anterior deltoid and triceps",
    image: "https://thumbs.gfycat.com/SpiffySimilarClingfish.webp"
    },
    {name: "Dumbbell lateral raise",
    muscles: "lateral deltoid",
    image: "https://thumbs.gfycat.com/YoungLoneDarklingbeetle.webp"
    },
    {name: "Machine lateral raise",
    muscles: "lateral deltoid",
    image: "https://thumbs.gfycat.com/DiscreteGrandHellbender.webp"
    },
    {name: "Dumbbell rear deltoid fly",
    muscles: "rear deltoid",
    image: "https://thumbs.gfycat.com/ChubbyEvilJellyfish.webp"
    },
    {name: "Cable rear deltoid fly",
    muscles: "rear deltoid",
    image: "https://thumbs.gfycat.com/OfficialQuaintHadrosaurus-max-1mb.gif"
    },
    {name: "Rear pec dec fly",
    muscles: "rear deltoid",
    image: "https://thumbs.gfycat.com/WelloffSlushyGuineafowl.webp"
    },
    {name: "Front raises",
    muscles: "anterior deltoid",
    image: "https://thumbs.gfycat.com/AnchoredSlightAllensbigearedbat.webp"
    },
]

let backExercises = [
    {name: "Back hyperextensions",
    muscles: "spinal erectors, glutes, hamstrings",
    image: "https://thumbs.gfycat.com/InexperiencedAggravatingCrossbill.webp"
    },
    {name: "Machine row",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/WarpedFarawayBoutu-size_restricted.gif"
    },
    {name: "T-bar row",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/BiodegradableAbsoluteIsopod-max-1mb.gif}"
    },
    {name: "Machine high row",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/ElatedNewEelelephant-max-1mb.gif"
    },
    {name: "Machine assisted pull up",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/BigFamousCrocodileskink-max-1mb.gif"
    },
    {name: "Latissimus pull down",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/DifficultPepperyBasenji.webp}"
    },
    {name: "Barbell rows",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/MagnificentValuableFunnelweaverspider.webp"
    },
    {name: "Dumbbell rows",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/CautiousDopeyCondor.webp"
    },
    {name: "Pull ups",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/BareWhiteAlleycat-max-1mb.gif"
    },
    {name: "Seated cable rows",
    muscles: "lats, traps, rhomboids, teres major",
    image: "https://thumbs.gfycat.com/LightHotBrontosaurus.webp"
    },
    {name: "Barbell shrugs",
    muscles: "traps",
    image: "https://thumbs.gfycat.com/DependableMediumAlbacoretuna.webp"
    },
    {name: "Cable lat pullover",
    muscles: "lats",
    image: "https://thumbs.gfycat.com/SerpentineCoolBluefintuna.webp"
    },
]

let legExercises = [
    {name: "Barbell squat",
    muscles: "quads, glutes",
    image: "https://thumbs.gfycat.com/ShockedRigidBuffalo.webp"
    },
    {name: "Barbell front squat",
    muscles: "quads, glutes",
    image: "https://thumbs.gfycat.com/BoringCostlyDragon.webp"
    },
    {name: "Goblet squat",
    muscles: "quads, glutes",
    image: "https://thumbs.gfycat.com/BountifulCostlyCopperhead.webp"
    },
    {name: "Sissy squat",
    muscles: "quads, glutes",
    image: "https://thumbs.gfycat.com/CoordinatedLimpingBandicoot-max-1mb.gif"
    },
    {name: "Hack squat",
    muscles: "quads, glutes",
    image: "https://thumbs.gfycat.com/RipeDisloyalGazelle-max-1mb.gif "
    },
    {name: "Romanian/stiff leg deadlift",
    muscles: "hamstrings, glutes",
    image: "https://thumbs.gfycat.com/ForcefulIllCrownofthornsstarfish.webp"
    },
    {name: "Deadlift",
    muscles: "traps, lats, spinal erectors, quads, glutes, hamstrings",
    image: "https://thumbs.gfycat.com/DeadlyNimbleJabiru-max-1mb.gif"
    },
    {name: "Leg press",
    muscles: "quads, glutes",
    image: "https://thumbs.gfycat.com/DefiniteMinorGoldenmantledgroundsquirrel.webp"
    },
    {name: "Leg extension",
    muscles: "quads, glutes",
    image: "https://thumbs.gfycat.com/ClumsyClutteredJaeger.webp"
    },
    {name: "Lunges",
    muscles: "quads, glutes, hamstrings",
    image: "https://thumbs.gfycat.com/BrownCleanFattaileddunnart.webp"
    },
    {name: "Split squat",
    muscles: "quads, glutes, hamstrings",
    image: "https://thumbs.gfycat.com/AbleFondChick.webp"
    },
    {name: "Lying hamstring curl",
    muscles: "hamstrings",
    image: "https://thumbs.gfycat.com/AcclaimedWarmheartedKentrosaurus.webp "
    },
    {name: "Standing hamstring curl",
    muscles: "hamstrings",
    image: "https://thumbs.gfycat.com/AnyFarawayCassowary-max-1mb.gif"
    },
    {name: "Seated hamstring curl",
    muscles: "hamstrings",
    image: "https://thumbs.gfycat.com/BreakableWickedKissingbug.webp"
    },
    {name: "Glute ham raise",
    muscles: "glutes, hamstrings",
    image: "https://thumbs.gfycat.com/AcceptableSeparateBlacklab.webp"
    },
    {name: "Barbell hip thrusts",
    muscles: "glutes, hamstrings",
    image: "https://thumbs.gfycat.com/ImportantMixedDevilfish-size_restricted.gif"
    },
    {name: "Standing calf raises",
    muscles: "Gastrocnemius, soleus",
    image: "https://thumbs.gfycat.com/AmpleDecentGoldfinch.webp"
    },
    {name: "Seated calf raises",
    muscles: "Soleus, gastrocnemis",
    image: "https://www.strengthlog.com/wp-content/uploads/2020/03/calf-raise-seated.gif"
    },
]

let bicepsExercises = [
    {name: "Dumbell curls",
    muscles: "biceps, brachialis",
    image: "https://thumbs.gfycat.com/HastyMammothHairstreakbutterfly.webp"
    },
    {name: "Cable biceps curls",
    muscles: "biceps, brachialis",
    image: "https://thumbs.gfycat.com/JointThunderousLiger.webp"
    },
    {name: "Barbell curls",
    muscles: "biceps, brachialis",
    image: "https://thumbs.gfycat.com/AbandonedExhaustedEkaltadeta.webp"
    },
    {name: "Machine biceps curls",
    muscles: "biceps, brachialis",
    image: "https://thumbs.gfycat.com/WebbedFoolhardyHarvestmen.webp"
    },
]

let tricepsExercises = [
    {name: "Cable triceps extension",
    muscles: "triceps",
    image: "https://thumbs.gfycat.com/AdmirableSpicyElephantseal.webp"
    },
    {name: "Cable overhead triceps extension",
    muscles: "triceps",
    image: "https://thumbs.gfycat.com/OrangeAnchoredGoose.webp"
    },
    {name: "Barbell overhead triceps extension",
    muscles: "triceps",
    image: "https://thumbs.gfycat.com/DismalMeekCow.webp"
    },
    {name: "Dumbbell triceps extension",
    muscles: "triceps",
    image: "https://thumbs.gfycat.com/ImpressiveMemorableArabianoryx-max-1mb.gif"
    },
    {name: "Skull crushers",
    muscles: "triceps",
    image: "https://thumbs.gfycat.com/JollyBlissfulGavial.webp"
    },
    {name: "Machine triceps extension",
    muscles: "triceps",
    image: "https://thumbs.gfycat.com/SomeFlamboyantGnatcatcher-max-1mb.gif"
    },
]

let abdominalExercises = [
    {name: "Abdominal crunch",
    muscles: "rectus abdominis, obliques",
    image: "https://thumbs.gfycat.com/FlimsyAchingAidi.webp"
    },
    {name: "Reverse crunch",
    muscles: "rectus abdominis, obliques",
    image: "https://thumbs.gfycat.com/RareWelcomeAfricanporcupine.webp"
    },
    {name: "Lying leg raise",
    muscles: "rectus abdominis, obliques",
    image: "https://thumbs.gfycat.com/AngelicJointArieltoucan.webp"
    },
    {name: "Mountain climbers",
    muscles: "rectus abdominis, obliques",
    image: "https://thumbs.gfycat.com/ForthrightCalculatingGoral.webp"
    },
    {name: "Cable crunch",
    muscles: "rectus abdominis, obliques",
    image: "https://thumbs.gfycat.com/ForthrightCalculatingGoral.webp"
    },
    {name: "Abdominal machine",
    muscles: "rectus abdominis, obliques",
    image: "https://thumbs.gfycat.com/FoolishBlueCoot.webp"
    },
]

let cardioExercise = [
    {name: "Walking",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/BlindDetailedHoatzin.webp"
    },
    {name: "Jogging",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/FeminineRealisticHoki.webp"
    },
    {name: "Biking",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/ImpartialThinDore.webp"
    },
    {name: "Battle ropes",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/ActualRichImago.webp"
    },
    {name: "Stairclimber",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/TheseWellinformedCassowary.webp"
    },
    {name: "Kettle bell swings",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/SmugVigilantElkhound.webp"
    },
    {name: "Rowing machine",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/DampPerkyHairstreakbutterfly.webp"
    },
    {name: "Elliptical machine",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/ZanySizzlingDowitcher.webp"
    },
    {name: "Plyometrics",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/MeaslyCarelessEskimodog.webp"
    },
    {name: "Burpees",
    muscles: "the heart",
    image: "https://thumbs.gfycat.com/HeartyTanIchthyosaurs.webp"
    },
]

let exercises = {
    chest: chestExercises,
    shoulders: shoulderExercises,
    back: backExercises,
    legs: legExercises,
    biceps: bicepsExercises,
    triceps: tricepsExercises,
    abdominals: abdominalExercises,
    cardio: cardioExercise
}