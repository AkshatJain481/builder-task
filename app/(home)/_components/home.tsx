"use client"
import React, {useState , useEffect, use} from 'react'
import Image from 'next/image'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import {useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { PropertySchemaCreation, PropertySchemaCreationType } from '@/Models/PropertySchema' 
import { toast } from 'react-toastify'



function Home({handleSetUserData}: { handleSetUserData: (data:any) => void}) {

    
    
    const countries: string[] = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
        "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
        "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
        "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia",
        "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
        "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
        "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
        "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
        "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
        "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
        "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
        "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
        "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
        "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan",
        "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
        "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
        "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
        "Yemen", "Zambia", "Zimbabwe"
      ];
    
      const [selectedCountry, setSelectedCountry] = useState<string>('');
      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.target.value);
      };

      const { register, handleSubmit,setValue, watch, formState: { errors } } = useForm({
        resolver: zodResolver(PropertySchemaCreation),
        defaultValues: {
            user : '',
            name: '',
            country: '',
            phone: '',
            email: ''
            }

      });
      const onSubmit = (data: any ) => {
        const formattedData = {
            ...data,
            phone: phone
        }

        if(formattedData.user === '' || formattedData.name === '' || formattedData.country === '' || (formattedData.phone === '' && formattedData.email === '')){
            toast.error('Please fill all the required fields')

            return;
        }
        console.log(formattedData);
        handleSetUserData(formattedData);
      }
      const phone = watch("phone");

      const handlePhoneChange = (value: string) => {
        setValue("phone", value);
      };
      

  return (

    <section className='h-screen bg-[#122B49]'>
        <h1 className='text-[32px] text-white px-24 pt-16'> Sell or Rent your Property For Free</h1>
        <h5 className='text-white px-24 pt-4'>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</h5>
        <div className='flex py-16 justify-center space-x-24 '>
            <div>
            <h3 className='text-white text-[20px] '>Upload your property in 4  simple steps</h3>
            <ul className='text-white space-y-2 mt-8'>
                <li className='flex  text-[14px] items-center'> <Image src={'https://s3-alpha-sig.figma.com/img/3e1e/7bd2/1622434cb4da159751b4b4d97e89fae6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwyDe7fSof6t2JwpM8ryyTlD6IHmhawu8-PsX~KRdnPLx8B781XCn1PQ9G~t4oZB2hMQXTQ~eNhtc~7PrepHBz6s8ComiOwBNwZyMN2e9pUchIFnW1uQG8V6BmQbLQbo8RiquHuR7tgNndLuzmeGV2vxvJSUEdmVLQL3daQc-Qu~4mZgMPF0j3RawOg-ASIia1oEu1JVDS283Yo3GLKQDo3lLLTN-dmn7jJ941915TSzL6ahIrxHnOGGjBFigwciNqiqRSXF7I3sOlFzH~XE-yNIm1i79-J~HG1kFQgPhivnsrE2D4qNMjgq7RFvAtZs5zYvJrzoCzOqK2TD76mW9w__'} alt='tick-img'
                height={39}
                width={46} />
                Add your properties&nbsp; <b> Basic Details</b></li>
                <li className='flex text-[14px] items-center'> <Image src={'https://s3-alpha-sig.figma.com/img/3e1e/7bd2/1622434cb4da159751b4b4d97e89fae6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwyDe7fSof6t2JwpM8ryyTlD6IHmhawu8-PsX~KRdnPLx8B781XCn1PQ9G~t4oZB2hMQXTQ~eNhtc~7PrepHBz6s8ComiOwBNwZyMN2e9pUchIFnW1uQG8V6BmQbLQbo8RiquHuR7tgNndLuzmeGV2vxvJSUEdmVLQL3daQc-Qu~4mZgMPF0j3RawOg-ASIia1oEu1JVDS283Yo3GLKQDo3lLLTN-dmn7jJ941915TSzL6ahIrxHnOGGjBFigwciNqiqRSXF7I3sOlFzH~XE-yNIm1i79-J~HG1kFQgPhivnsrE2D4qNMjgq7RFvAtZs5zYvJrzoCzOqK2TD76mW9w__'} alt='tick-img'
                height={39}
                width={46} />
                Add property&nbsp; <b> Location</b></li>
                <li className='flex text-[14px] items-center'> <Image src={'https://s3-alpha-sig.figma.com/img/3e1e/7bd2/1622434cb4da159751b4b4d97e89fae6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwyDe7fSof6t2JwpM8ryyTlD6IHmhawu8-PsX~KRdnPLx8B781XCn1PQ9G~t4oZB2hMQXTQ~eNhtc~7PrepHBz6s8ComiOwBNwZyMN2e9pUchIFnW1uQG8V6BmQbLQbo8RiquHuR7tgNndLuzmeGV2vxvJSUEdmVLQL3daQc-Qu~4mZgMPF0j3RawOg-ASIia1oEu1JVDS283Yo3GLKQDo3lLLTN-dmn7jJ941915TSzL6ahIrxHnOGGjBFigwciNqiqRSXF7I3sOlFzH~XE-yNIm1i79-J~HG1kFQgPhivnsrE2D4qNMjgq7RFvAtZs5zYvJrzoCzOqK2TD76mW9w__'} alt='tick-img'
                height={39}
                width={46} />
                Add property &nbsp;<b> Features and amenities</b></li>
                <li className='flex text-[14px] items-center'> <Image src={'https://s3-alpha-sig.figma.com/img/3e1e/7bd2/1622434cb4da159751b4b4d97e89fae6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwyDe7fSof6t2JwpM8ryyTlD6IHmhawu8-PsX~KRdnPLx8B781XCn1PQ9G~t4oZB2hMQXTQ~eNhtc~7PrepHBz6s8ComiOwBNwZyMN2e9pUchIFnW1uQG8V6BmQbLQbo8RiquHuR7tgNndLuzmeGV2vxvJSUEdmVLQL3daQc-Qu~4mZgMPF0j3RawOg-ASIia1oEu1JVDS283Yo3GLKQDo3lLLTN-dmn7jJ941915TSzL6ahIrxHnOGGjBFigwciNqiqRSXF7I3sOlFzH~XE-yNIm1i79-J~HG1kFQgPhivnsrE2D4qNMjgq7RFvAtZs5zYvJrzoCzOqK2TD76mW9w__'} alt='tick-img'
                height={39}
                width={46} />
                Add &nbsp;<b> Price details</b></li>
                <li className='flex text-[14px] items-center'> <Image src={'https://s3-alpha-sig.figma.com/img/3e1e/7bd2/1622434cb4da159751b4b4d97e89fae6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwyDe7fSof6t2JwpM8ryyTlD6IHmhawu8-PsX~KRdnPLx8B781XCn1PQ9G~t4oZB2hMQXTQ~eNhtc~7PrepHBz6s8ComiOwBNwZyMN2e9pUchIFnW1uQG8V6BmQbLQbo8RiquHuR7tgNndLuzmeGV2vxvJSUEdmVLQL3daQc-Qu~4mZgMPF0j3RawOg-ASIia1oEu1JVDS283Yo3GLKQDo3lLLTN-dmn7jJ941915TSzL6ahIrxHnOGGjBFigwciNqiqRSXF7I3sOlFzH~XE-yNIm1i79-J~HG1kFQgPhivnsrE2D4qNMjgq7RFvAtZs5zYvJrzoCzOqK2TD76mW9w__'} alt='tick-img'
                height={39}
                width={46} />
                Add your best &nbsp;<b> Property Shots</b></li>
            </ul>
        </div>
        <div className='rounded-xl font-medium w-[600px] max-h-[380px] '>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className='text-[#122B49]  text-[20px] bg-[#FCF8F4] rounded-t-xl px-16 py-3'>LETS GET YOU STARTED !</h3>
            <div className=' overflow-auto max-h-[250px]	bg-white pl-16 pr-36 py-8'>
                <div className='space-y-14'>
                    <div>
                    <div><span className='text-red-400'>*</span>I am:</div>
                    <div className='flex justify-between mt-4'>
                    <label htmlFor="" className='flex items-center space-x-4'>

                    <input type="radio"  value="Owner" {...register("user")} id="" className='h-6 w-6 '/>
                        <span>Owner</span>
                    </label>
                    <label htmlFor="" className='flex items-center space-x-4'>
                    <input type="radio"  value="Builder" {...register("user")} className='h-6 w-6 ' />
                        <span>Builder</span>
                    </label>
                    </div>
                    </div>
                    <div className=''>
                        <div className='mb-1'>Your Name <span className='text-red-400'>*</span></div>
                        <input type="text" {...register("name")} className='border-[1px] border-[#7A7A7A] w-full py-2 px-4 rounded-sm' placeholder='Name' />
                    </div>
                    <div>Country <span className='text-red-400'>*</span>
                    <select id="country" {...register("country")}  className='w-full bg-white mt-1 border-[1px] border-[#7A7A7A] px-4 py-2'>
                        <option value="" disabled>Select a country</option>
                        {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                        ))}
                    </select>
                    </div>
                        <div >
                        <div className='mb-1'>Phone Number <span className='text-red-400'>*</span></div>
                        <PhoneInput
                            country={'in'}
                            value={phone}
                            onChange={handlePhoneChange}
                            inputProps={{
                                name: 'phone',
                                className: 'w-full py-2 px-12 rounded-sm'
                            }}
                            placeholder='000-000-0000'
                            containerClass="w-full border-[1px] border-[#7A7A7A] rounded-sm "
                            inputStyle={{
                                width: '100%',
                                height: '38px',
                                fontSize: '16px',
                                borderColor: '#7A7A7A'
                            }}
                            
                        />
                        <div className='my-6'>OR</div>

                        <div>
                            <div>Email <span className='text-red-400'>*</span></div>
                            <input {...register("email")} type="email" className='w-full border-[1px] border-[#7A7A7A] px-4 py-2 mt-1' placeholder='Email' />
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className='bg-[#FCF8F4] flex justify-between items-center px-8 py-4 rounded-b-xl'>
                <div>
                Need Help? Call 9999999999

                </div>
                <button className='text-white bg-[#122B49] rounded-lg px-8 py-1' type='submit'>NEXT</button>
            </div>
            </form>
        </div>
        </div>


    </section>
  )
}

export default Home