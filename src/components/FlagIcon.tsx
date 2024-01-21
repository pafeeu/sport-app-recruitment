function FlagIcon({ countryCode }: { countryCode: string}) {
    const flagUrl = `https://flagcdn.com/${countryCode}.svg`;
    return (
        <img className={'mr-2'} src={flagUrl} alt={`${countryCode} flag`}  style={{height:'1.5rem'}}/>
    );
}

export default FlagIcon;