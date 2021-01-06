

let bioinfoarray = ["Bio digester is a modern on site sewer system As feacal matter comes from the toilet is digested by aerobic and anaerobic reactions.The end product is water which is soaked away.Bio tank is made out of water proofed and reinforced concrete.",

"Bio tank comes with grease filter for filtering water from the batheroom and the kicthen.",
"Bio tank comes in different sizes ranging from domestic to institutional.",
"1-30 users",
"1-100 users",
"1-200 users" ]


let whybioarray = ["1. There is no to evacuate the bio digester as opposed to the conventional septic tank which must be evacuted at frequent intervals.",
"2. Bio tank requires no maintaince.",
"3. It takes small spae.",
"4. Its faster in the digestion of feacal matter-12 hours",
"5. Bio tank deosnt torate insects like flies and cockroaches.",
"6. No bad smell in the home unlike the conventional septic tank.",
"7. Its an underground system.",
"8. It doesnt temper with the beauty of the compound.",
"9. It doesnt affect other services and future like parking and family events.",
"10. With a bio digester system, there is no risks of accidents.",
"11. Oil and soap are filtered from goimg imto the soak pit.",
"12. It is cheaper and paid once.",
"13. It is a lifetime system.",
"14. It has a twenty year guarantee.",
"15. A bio digester is a recommendable even in the wetland compared to the conventional septic tank.",]
 

function StartTypingBioInfoText ()
{
    if ($(".bio-info-text-slider").length == 1) 
    { 
                
        let typed = new Typed(".bio-info-text-slider", { 
            strings:bioinfoarray,
            typeSpeed: 50, 
            loop: true, 
            backDelay: 1000, 
            backSpeed: 30, 
        }); 
    }
} 

function StartTypingReasonsText ()
{
    if ($(".text-slider").length == 1) 
    { 
                
        let typed = new Typed(".text-slider", { 
            strings:whybioarray,
            typeSpeed: 50, 
            loop: true, 
            backDelay: 1000, 
            backSpeed: 30, 
        }); 
    }
} 
