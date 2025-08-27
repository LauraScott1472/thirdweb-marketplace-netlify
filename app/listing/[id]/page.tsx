'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { marketplace } from '@/lib/contracts';
import { getListing } from 'thirdweb/extensions/marketplace';