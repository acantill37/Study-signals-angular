import { TestBed } from '@angular/core/testing';
import { CardsService } from './cards.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const cardsMock = [
  {
    "data": [
        {
            "id": 34541863,
            "name": "\"A\" Cell Breeding Device",
            "type": "Spell Card",
            "humanReadableCardType": "Continuous Spell",
            "frameType": "spell",
            "desc": "During each of your Standby Phases, put 1 A-Counter on 1 face-up monster your opponent controls.",
            "race": "Continuous",
            "archetype": "Alien",
            "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-breeding-device-9766",
            "card_sets": [
                {
                    "set_name": "Force of the Breaker",
                    "set_code": "FOTB-EN043",
                    "set_rarity": "Common",
                    "set_rarity_code": "(C)",
                    "set_price": "0"
                }
            ],
            "card_images": [
                {
                    "id": 34541863,
                    "image_url": "https://images.ygoprodeck.com/images/cards/34541863.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/34541863.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/34541863.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.07",
                    "tcgplayer_price": "0.15",
                    "ebay_price": "0.99",
                    "amazon_price": "24.45",
                    "coolstuffinc_price": "0.25"
                }
            ]
        },
        {
            "id": 64163367,
            "name": "\"A\" Cell Incubator",
            "type": "Spell Card",
            "humanReadableCardType": "Continuous Spell",
            "frameType": "spell",
            "desc": "Each time an A-Counter(s) is removed from play by a card effect, place 1 A-Counter on this card. When this card is destroyed, distribute the A-Counters on this card among face-up monsters.",
            "race": "Continuous",
            "archetype": "Alien",
            "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-incubator-8856",
            "card_sets": [
                {
                    "set_name": "Gladiator's Assault",
                    "set_code": "GLAS-EN062",
                    "set_rarity": "Common",
                    "set_rarity_code": "(C)",
                    "set_price": "0"
                }
            ],
            "card_images": [
                {
                    "id": 64163367,
                    "image_url": "https://images.ygoprodeck.com/images/cards/64163367.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/64163367.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/64163367.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.14",
                    "tcgplayer_price": "0.25",
                    "ebay_price": "1.25",
                    "amazon_price": "0.50",
                    "coolstuffinc_price": "0.25"
                }
            ]
        },
        {
            "id": 91231901,
            "name": "\"A\" Cell Recombination Device",
            "type": "Spell Card",
            "humanReadableCardType": "Quick-Play Spell",
            "frameType": "spell",
            "desc": "Target 1 face-up monster on the field; send 1 \"Alien\" monster from your Deck to the Graveyard, and if you do, place A-Counters on that monster equal to the Level of the sent monster. During your Main Phase, except the turn this card was sent to the Graveyard: You can banish this card from your Graveyard; add 1 \"Alien\" monster from your Deck to your hand.",
            "race": "Quick-Play",
            "archetype": "Alien",
            "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-recombination-device-7614",
            "card_sets": [
                {
                    "set_name": "Invasion: Vengeance",
                    "set_code": "INOV-EN063",
                    "set_rarity": "Common",
                    "set_rarity_code": "(C)",
                    "set_price": "0"
                }
            ],
            "card_images": [
                {
                    "id": 91231901,
                    "image_url": "https://images.ygoprodeck.com/images/cards/91231901.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/91231901.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/91231901.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.12",
                    "tcgplayer_price": "0.23",
                    "ebay_price": "0.99",
                    "amazon_price": "0.50",
                    "coolstuffinc_price": "0.49"
                }
            ]
        },
        {
            "id": 73262676,
            "name": "\"A\" Cell Scatter Burst",
            "type": "Spell Card",
            "humanReadableCardType": "Quick-Play Spell",
            "frameType": "spell",
            "desc": "Select 1 face-up \"Alien\" monster you control. Destroy it and distribute new A-Counters equal to its Level among your opponent's face-up monsters.",
            "race": "Quick-Play",
            "archetype": "Alien",
            "ygoprodeck_url": "https://ygoprodeck.com/card/a-cell-scatter-burst-9737",
            "card_sets": [
                {
                    "set_name": "Strike of Neos",
                    "set_code": "STON-EN041",
                    "set_rarity": "Common",
                    "set_rarity_code": "(C)",
                    "set_price": "0"
                }
            ],
            "card_images": [
                {
                    "id": 73262676,
                    "image_url": "https://images.ygoprodeck.com/images/cards/73262676.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/73262676.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/73262676.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.12",
                    "tcgplayer_price": "0.15",
                    "ebay_price": "2.00",
                    "amazon_price": "9.76",
                    "coolstuffinc_price": "0.25"
                }
            ]
        },
        {
            "id": 80181649,
            "name": "\"Case of K9\"",
            "type": "Spell Card",
            "humanReadableCardType": "Continuous Spell",
            "frameType": "spell",
            "desc": "When this card is activated: You can add 1 \"K9\" monster from your Deck to your hand. \"K9\" monsters you control gain 900 ATK the turn your opponent activated a monster effect in the hand or GY. If this card in the Spell & Trap Zone is destroyed by card effect: You can Set 1 \"K9\" Quick-Play Spell from your Deck or GY. You can only use this effect of \"\"Case of K9\"\" once per turn. You can only activate 1 \"\"Case of K9\"\" per turn.",
            "race": "Continuous",
            "archetype": "K9",
            "ygoprodeck_url": "https://ygoprodeck.com/card/case-of-k9-14990",
            "card_images": [
                {
                    "id": 80181649,
                    "image_url": "https://images.ygoprodeck.com/images/cards/80181649.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/80181649.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/80181649.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "1.13",
                    "tcgplayer_price": "0.00",
                    "ebay_price": "0.00",
                    "amazon_price": "0.00",
                    "coolstuffinc_price": "0.00"
                }
            ]
        },
        {
            "id": 98319530,
            "name": "\"Infernoble Arms - Almace\"",
            "type": "Spell Card",
            "humanReadableCardType": "Equip Spell",
            "frameType": "spell",
            "desc": "While this card is equipped to a monster: You can equip 1 \"Infernoble Arms\" Equip Spell from your Deck or GY, except \"\"Infernoble Arms - Almace\"\", to 1 appropriate monster you control, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 of your FIRE Warrior monsters that is banished or in your GY; add it to your hand. You can only use 1 \"\"Infernoble Arms - Almace\"\" effect per turn, and only once that turn.",
            "race": "Equip",
            "archetype": "Infernoble Arms",
            "ygoprodeck_url": "https://ygoprodeck.com/card/infernoble-arms-almace-13794",
            "card_sets": [
                {
                    "set_name": "Duelist Nexus",
                    "set_code": "DUNE-EN056",
                    "set_rarity": "Quarter Century Secret Rare",
                    "set_rarity_code": "",
                    "set_price": "0"
                },
                {
                    "set_name": "Duelist Nexus",
                    "set_code": "DUNE-EN056",
                    "set_rarity": "Ultra Rare",
                    "set_rarity_code": "(UR)",
                    "set_price": "0"
                }
            ],
            "card_images": [
                {
                    "id": 98319530,
                    "image_url": "https://images.ygoprodeck.com/images/cards/98319530.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/98319530.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/98319530.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.49",
                    "tcgplayer_price": "1.56",
                    "ebay_price": "0.00",
                    "amazon_price": "0.00",
                    "coolstuffinc_price": "0.00"
                }
            ]
        },
        {
            "id": 37478723,
            "name": "\"Infernoble Arms - Durendal\"",
            "type": "Spell Card",
            "humanReadableCardType": "Equip Spell",
            "frameType": "spell",
            "desc": "While this card is equipped to a monster: You can add 1 Level 5 or lower FIRE Warrior monster from your Deck to your hand, then destroy this card. If this card is sent to the GY because the equipped monster is sent to the GY: You can target 1 Level 5 or lower FIRE Warrior monster in your GY; Special Summon it, also you cannot Special Summon monsters for the rest of the turn, except Warrior monsters. You can only use 1 \"\"Infernoble Arms - Durendal\"\" effect per turn, and only once that turn.",
            "race": "Equip",
            "archetype": "Noble Knight",
            "ygoprodeck_url": "https://ygoprodeck.com/card/infernoble-arms-durendal-10991",
            "card_sets": [
                {
                    "set_name": "2021 Tin of Ancient Battles",
                    "set_code": "MP21-EN136",
                    "set_rarity": "Super Rare",
                    "set_rarity_code": "(SR)",
                    "set_price": "0"
                },
                {
                    "set_name": "Amazing Defenders",
                    "set_code": "AMDE-EN042",
                    "set_rarity": "Rare",
                    "set_rarity_code": "(R)",
                    "set_price": "0"
                },
                {
                    "set_name": "Rise of the Duelist",
                    "set_code": "ROTD-EN053",
                    "set_rarity": "Ultra Rare",
                    "set_rarity_code": "(UR)",
                    "set_price": "0"
                }
            ],
            "card_images": [
                {
                    "id": 37478723,
                    "image_url": "https://images.ygoprodeck.com/images/cards/37478723.jpg",
                    "image_url_small": "https://images.ygoprodeck.com/images/cards_small/37478723.jpg",
                    "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/37478723.jpg"
                }
            ],
            "card_prices": [
                {
                    "cardmarket_price": "0.11",
                    "tcgplayer_price": "0.15",
                    "ebay_price": "0.99",
                    "amazon_price": "2.96",
                    "coolstuffinc_price": "0.00"
                }
            ]
        }
    ],
    "meta": {
        "generated": "2025-06-04T13:42:05+00:00",
        "current_rows": 7,
        "total_rows": 13719,
        "rows_remaining": 13712,
        "total_pages": 1959,
        "pages_remaining": 1959,
        "next_page": "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=7&offset=7",
        "next_page_offset": 7
    }
}
]

const httpClientMock = {
  get: jest.fn(),
}

describe('CardsService', () => {
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardsService, {provide: HttpClient, useValue:httpClientMock}]
    });
    service = TestBed.inject(CardsService);
   httpClientMock.get.mockReturnValue(of(cardsMock));
  });

  it('getUser http have been called', () => {
    service.loadCards();
    expect(httpClientMock.get).toHaveBeenCalled();
  }),

  //Probar que nuestro servicio se llama correctamente
  it('retorna datos de cartas', (done) => {
    service.loadCards().subscribe((res) => {
        expect(res.length).toBe(7);
        done();
    })
  });
});
